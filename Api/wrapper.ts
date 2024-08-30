import { getUser } from '@/contexts/AuthContext';
import { Configuration } from './configuration';
import globalAxios from 'axios';

export const BaseUrl = "https://staging-api.herocircle.app";

globalAxios.interceptors.request.use(async (config) => {
  if (!config?.headers) {
    throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
  }
  config.headers = config.headers ?? {};

  const userSession = await getUser();
  config.headers.Authorization = `Bearer ${userSession?.authToken}`;
  return config;
});

const ABORT_CONTROLLER = new AbortController();

export const AXIOS_CONFIG = new Configuration({
  basePath: BaseUrl,
  baseOptions: {
    signal: ABORT_CONTROLLER.signal,
    timeout: 20000,
  }
});

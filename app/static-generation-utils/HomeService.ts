    import { CircleHomeApi, StoryApi, StudyApi } from '@/Api'; 
    import { AXIOS_CONFIG } from '@/Api/wrapper';

    export const getStatistics = async () => {
    const api = new CircleHomeApi(AXIOS_CONFIG);
    const response = await api.getStatistics();
    return {
        globalCommunity: response.data.mobilizers + response.data.supporters,
        ...response.data,
    };
    };

    export const getStories = async () => {
    const api = new StoryApi(AXIOS_CONFIG);
    const response = await api.getStories();
    return response.data;
    };

    export const getStudies = async () => {
    const api = new StudyApi(AXIOS_CONFIG);
    const response = await api.getStudies();
    return response.data;
    };

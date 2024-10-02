import { useQuery } from '@tanstack/react-query';
import { CircleSubscriptionsApi, PublicUserProfileRoleEnum } from '@/Api';
import { useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { AXIOS_CONFIG } from '@/Api/wrapper';

const useUserSubscriptions = () => {
  const { userData, isPrivilegedTier } = useAuth();
  const {
    data: userSubscriptions,
    refetch,
    isLoading,
    isSuccess
  } = useQuery({
    queryKey: ['subscriptions/me'],
    queryFn: async () => {
      const response = await new CircleSubscriptionsApi(AXIOS_CONFIG).getMyCircleSubscriptions();
      return response.data.filter((item) => item?.circle !== null);
    },
    staleTime: 50000,
    enabled: !!userData?._id
  });

  const isCircleSubscriberOrMobilizerOrTrialOrOrganization = useCallback(
    (id: string) => {
      if (!userData) return undefined;
      if (!isSuccess) return undefined;
      const isMobilier = userData?.role === PublicUserProfileRoleEnum.MOBILIZER;
      const filtered = userSubscriptions?.find((item) => item?.circle === id);
      return isMobilier || isPrivilegedTier() || !!filtered;
    },
    [userData, isSuccess, userSubscriptions, isPrivilegedTier]
  );
  const isSubscriber =
    !isLoading &&
    isSuccess &&
    (userSubscriptions?.length !== 0 ||
      userData?.role === PublicUserProfileRoleEnum.MOBILIZER ||
      isPrivilegedTier());

  return {
    userSubscriptions,
    isCircleSubscriberOrMobilizer:
      isCircleSubscriberOrMobilizerOrTrialOrOrganization,
    refetch,
    isSubscriber,
    isLoading,
    isSuccess
  };
};

export default useUserSubscriptions;

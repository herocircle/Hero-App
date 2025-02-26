import React, { createContext, useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery, } from '@tanstack/react-query';
import { PublicUserProfileRoleEnum, User } from '../Api/models';
import axios from 'axios';
import { BaseUrl } from '@/Api/wrapper';


export const AuthContext = createContext<any>({})


export async function getUser(): Promise<any | null> {
    try {
        const ParsedUser = await AsyncStorage.getItem("UserSession")
        if (ParsedUser !== null) {
            const StringifiedUser = JSON.parse(ParsedUser)
            return StringifiedUser
        }
        return null
    } catch (error) {
        console.log(error)
        return null
    }
}
export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [userData, setUserData] = useState<User | null>(null)
    const [authToken, setAuthToken] = useState<string | null>(null)

    const { isLoading, refetch } = useQuery({
        queryFn: async () => {
            const ParsedUser = await AsyncStorage.getItem("UserSession")
            if (ParsedUser !== null) {
                const StringifiedUser = JSON.parse(ParsedUser)
                const result = await axios.get(
                    `${BaseUrl}/user-profile/me`,
                    {
                        headers: {
                            Authorization: `Bearer ${StringifiedUser?.authToken}`,
                        },
                    }
                )
                setUserData(result.data)
                setAuthToken(StringifiedUser?.authToken)
                return StringifiedUser
            }
            setUserData(null)
            setAuthToken(null)
            return null
        },
        queryKey: ["UserSession"],
    })

    function resetStates() {
        setUserData(null)
        setAuthToken(null)
    }

    React.useEffect(() => {
        refetch()
    }, [])

    const isPrivilegedTier = useCallback(() => {
        if (!userData?.role) return undefined;
        return [
            PublicUserProfileRoleEnum.ORGANIZATION,
            PublicUserProfileRoleEnum.TRIAL,
            PublicUserProfileRoleEnum.TRIALSUPPORTER
        ].includes(userData?.role as any);
    }, [userData?.role]);

    const isLoggedIn = !!userData && !!authToken;

    async function logout() {
        await AsyncStorage.removeItem("UserSession")
        resetStates()
    }

    return (
        <AuthContext.Provider
            value={{
                userData,
                authToken,
                isLoading,
                resetStates,
                isPrivilegedTier,
                isLoggedIn,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
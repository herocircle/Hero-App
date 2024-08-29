import { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery, } from '@tanstack/react-query';
import { User } from '../Api/models';


export const AuthContext = createContext<any>({})




export async function getUser(): Promise<any | null> {
    try {
        const ParsedUser = await AsyncStorage.getItem("@User")
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

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [userData, setUserData] = useState<User | null>(null)
    const [authToken, setAuthToken] = useState<string | null>(null)

    const { isLoading } = useQuery({
        queryFn: async () => {
            const ParsedUser = await AsyncStorage.getItem("@User")
            if (ParsedUser !== null) {
                const StringifiedUser = JSON.parse(ParsedUser)
                setUserData(StringifiedUser?.userData)
                setAuthToken(StringifiedUser?.authToken)
                return StringifiedUser
            }
            return null
        },
        queryKey: ["@UserSessionFromStorage"],
    })

    function resetStates() {
        setUserData(null)
        setAuthToken(null)
    }

    return (
        <AuthContext.Provider
            value={{
                userData,
                authToken,
                isLoading,
                resetStates
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
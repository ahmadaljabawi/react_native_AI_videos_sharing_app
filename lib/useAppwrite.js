import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'

export const useAppwrite = (fn) => {
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    
    const fetchData = async () => {
        setisLoading(true);

        try {
        const response = await fn();
        setData(response);
        } catch (error) {
        Alert.alert('Error', error.message)
        } finally {
        setisLoading(false);
        }

        setisLoading(false);
    }

    useEffect(() => {
    fetchData();
    }, []);

    const refetch = () => fetchData();

    return { data, isLoading, refetch }
}

export default useAppwrite;
import { useState, useEffect } from "react";
import { ConfigData } from "@/types/config";

interface UseConfigReturn {
    config: ConfigData | null;
    isLoading: boolean;
    error: string | null;
    refetch: () => void;
}

export const useConfig = (): UseConfigReturn => {
    const [config, setConfig] = useState<ConfigData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchConfig = async (): Promise<void> => {
        try {
            setIsLoading(true);
            setError(null);
            const response: Response = await fetch("/api/config");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: ConfigData = await response.json();
            setConfig(data);
        } catch (error: unknown) {
            console.error("Failed to fetch config: ", error);
            setError("Failed to load configuration");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        void fetchConfig();
    }, []);

    const refetch = (): void => {
        void fetchConfig();
    };

    return {
        config,
        isLoading,
        error,
        refetch,
    };
}; 
export interface ConfigData {
    readonly contract_address: string;
    readonly pump_fun_url: string;
    readonly x_link: string;
    readonly instagram_link: string;
    readonly tiktok_link: string;
}

export interface ComponentProps {
    config: ConfigData | null;
    isLoading?: boolean;
} 
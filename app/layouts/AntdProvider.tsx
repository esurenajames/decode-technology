'use client';

import { ConfigProvider } from 'antd';

export default function AntdProvider({ children }: { children: React.ReactNode }) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#2F7FF5',
                    colorLink: '#2F7FF5',
                    borderRadius: 8,
                    fontFamily: 'Inter, sans-serif',
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
}

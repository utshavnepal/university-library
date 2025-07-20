const config ={
    env:{
        apiEndpoint:process.env.NEXT_PUBLIC_API_ENDPOINT!,
        imagekit:{
            urlEndpoint:process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
            publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
            privateKey:process.env.IMAGEKIT_PRIVATE_KEY!
        },
        databaseUrl:process.env.DATABASE_URL!,
        upstash:{
            redisUrl: process.env.UPSTASH_REDIS_REST_URL,
            redisToken: process.env.UPSTASH_REDIS_REST_TOKEN,
            qstashUrl:process.env.QSTASH_URL!,
            qstashToken: process.env.QSTASH_TOKEN!,
        }
    }
}

export default config
import { Pinecone } from '@pinecone-database/pinecone'

let pinecone: Pinecone | null;

export const getPineconeClient = async () => {
    if (!pinecone) {
        pinecone = new Pinecone({
            apiKey: process.env.PINECONE_API_KEY!
        })
    }
    return pinecone
}

export async function loadS3IntoPinecone(fileKey: string){
    // 1. obtain pdf -> download and read from pdf


}
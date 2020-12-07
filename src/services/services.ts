export default async function lookup(zipCode: string): Promise<Location>{
    const response = await fetch('https://api.zippopotam.us/us/' + zipCode);
    return await response.json();
}
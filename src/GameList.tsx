export interface GameData {
    title: string,
    imgs: string[],
    horizontalCover: string,
    verticalCover: string,
    releaseDate: Date,
    summary: string,
    platforms: string[],
    genres: string[],
    rating: string
}

const gamedata: GameData[] = [
    {
        title: "Omori",
        imgs: [],
        horizontalCover: "",
        verticalCover: "",
        releaseDate: new Date('December 25, 2020'),
        summary: "Explore a strange world full of colorful friends and foes. When the time comes, the path you’ve chosen will determine your fate... and perhaps the fate of others as well.",
        platforms: ["PC", "PlayStation 4", "PlayStation 5", "Nintendo Switch", "Xbox"],
        genres: ["RPG"],
        rating: "M"
    }
]
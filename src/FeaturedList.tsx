export interface FeaturedGames {
    titleIMG: string,
    mainIMG: string,
    hook: string,
    summary: string,
    gameName: string,
    gameID: number,
}

const featuredGames: FeaturedGames[] = [
    {
        titleIMG: "https://www.gamegrin.com/assets/game/omori/logo/omori-logo-1.png",
        mainIMG: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/02/Omori-mirror.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
        hook: "Remember The Past",
        summary: "Explore a strange world full of colorful friends and foes. When the time comes, the path you’ve chosen will determine your fate... and perhaps the fate of others as well.",
        gameName: "Omori",
        gameID: 1,
    },
    {
        titleIMG: "https://www.khdatabase.com/images/thumb/c/cc/Kingdom_Hearts_II_logo_KHII.png/700px-Kingdom_Hearts_II_logo_KHII.png",
        mainIMG: "https://www.kotaku.com.au/wp-content/uploads/2017/06/27/h6v57xjriwwcpbqmdkxo.jpg",
        hook: "The Power of Friendship",
        summary: "A darkly-cloaked Mickey Mouse joins Donald, Goofy, and Sora as they continue their adventure into several popular Disney-inspired action/RPG worlds.",
        gameName: "Kingdom Hearts II",
        gameID: 0,
    },
    {
        titleIMG: "https://preview.redd.it/ctxagd0z3w541.png?auto=webp&s=e41bee6dfb0598ba6215a347709d6a2f4370f130",
        mainIMG: "https://i.guim.co.uk/img/media/0199cf90c61afaf9536d98706d0c81425133f61b/0_1460_4863_2915/master/4863.jpg?width=1900&dpr=2&s=none",
        hook: "Can You Save Them?",
        summary: "In three days, the moon will fall and the land of Termina will meet with a terrible fate. Can you save it in time? Relive the world’s final 72 hours, solve elaborate puzzles, conquer dungeons, battle giant bosses, and befriend the doomed people of Termina in one of Nintendo’s most suspenseful apocalyptic adventures ever.",
        gameName: "Majora's Mask",
        gameID: 2,
    },
    {
        titleIMG: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Undertale_vector_logo_on_black_borders.svg/1128px-Undertale_vector_logo_on_black_borders.svg.png",
        mainIMG: "https://assets1.ignimgs.com/thumbs/userUploaded/2016/1/8/undertale11280-1452305603339.jpg",
        hook: "Let's Stay Playful",
        summary: "UNDERTALE! The RPG game where you don't have to destroy anyone.",
        gameName: "Undertale",
        gameID: 3,
    },
    {
        titleIMG: "https://upload.wikimedia.org/wikipedia/commons/3/36/Super_Mario_Bros._Wonder_Logo.png",
        mainIMG: "https://www.godisageek.com/wp-content/uploads/Super-Mario-Bros-Wonder-6.jpg",
        hook: "Join in on the Fun!",
        summary: "Super Mario Bros. Wonder features Princess Peach, Princess Daisy and Yoshi as playable characters in this new 2D, co-op platformer, in addition to familiar characters like Mario, Luigi and Toad.",
        gameName: "Mario Wonder",
        gameID: 0,
    }
]

export default featuredGames;
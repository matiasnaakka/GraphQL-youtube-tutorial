let games = [
    { id: 1, title: 'Halo', platform: ['Xbox', 'PC'] },
    { id: 2, title: 'God of War', platform: ['Playstation'] },
    { id: 3, title: 'Super Smash Bros', platform: ['Nintendo'] },
    { id: 4, title: 'Fortnite', platform: ['Xbox', 'PC', 'Playstation', 'Nintendo'] },
    { id: 5, title: 'Minecraft', platform: ['Xbox', 'PC', 'Playstation', 'Nintendo'] }
]

let authors = [
    { id: 1, name: 'John Doe', verified: true },
    { id: 2, name: 'Jane Doe', verified: false },
    { id: 3, name: 'Jack Doe', verified: true },
]

let reviews = [
    { id: 1, rating: 5, content: 'This game is awesome!', author_id: '1', game_id: '2' },
    { id: 2, rating: 4, content: 'This game is pretty good!', author_id: '2', game_id: '3' },
    { id: 3, rating: 3, content: 'This game is ok!', author_id: '3', game_id: '4' },
    { id: 4, rating: 2, content: 'This game is pretty bad!', author_id: '4', game_id: '5' },
    { id: 5, rating: 1, content: 'This game is awful!', author_id: '3', game_id: '1' },
]

export default {
    games,
    authors,
    reviews
}
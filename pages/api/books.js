export default function handler (req, res) {

    const books = [
        { title: "Game of Thrones",
          author: "George RR Martin",    
        },
        {
          title: "Atomic Habits",
          author: "James Clear",
        },
        {
          title: "Born A Crime",
          author: "Trevor Noah",
        },
     
     ];

    res.json(books);

}
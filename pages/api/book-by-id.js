export default function handler(req, res) {
    const id = req.query.id;

    const books = [
        { 
          id: "1",
          title: "Game of Thrones",
          author: "George RR Martin",
          imgUrl: "/assets/1.png"    
        },
        { 
          id: "2",
          title: "Atomic Habits",
          author: "James Clear",
          imgUrl: "/assets/2.png"
        },
        { 
          id: "3",
          title: "Born A Crime",
          author: "Trevor Noah",
          imgUrl: "/assets/3.png"
        },
     
    ];

    const foundBook = books.find((book) => {
        if (book.id === id) {
            return true;
        }
        else {
            return false;
        }
    });

    res.json({ book: foundBook });

}
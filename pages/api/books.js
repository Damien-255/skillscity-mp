export default function handler (req, res) {

    const books = [
        { title: "Game of Thrones",
          author: "George RR Martin",
          imgUrl: "/assets/1.png"    
        },
        {
          title: "Atomic Habits",
          author: "James Clear",
          imgUrl: "/assets/2.png"
        },
        {
          title: "Born A Crime",
          author: "Trevor Noah",
          imgUrl: "/assets/3.png"
        },
     
     ];

    res.json(books);

}
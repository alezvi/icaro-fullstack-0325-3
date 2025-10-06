import CardItem from './CardItem.jsx';

export default function Cards() {
    const users = [
      { "username" : "Cosme Fulanito II", "online" : true, "avatar_url" : "https://i.pravatar.cc/80?img=13" },
      { "username" : "Marge Simpsons", "online" : true, "avatar_url" : "https://i.pravatar.cc/80?img=14" },
      { "username" : "Homero Simpsons", "online" : false, "avatar_url" : "https://i.pravatar.cc/80?img=15" },
      { "username" : "Bart Simpsons", "online" : true, "avatar_url" : null },
      { "username" : "Maggie Simpsons", "online" : false, "avatar_url" : null },
    ];

    return (
      <div className="row my-3">
        <div className="mb-3 mb-sm-0">
          {
            users.map((user, key) => {
              return <CardItem key={key} user={user} />
            })
          }
        </div>
      </div>
    )
}

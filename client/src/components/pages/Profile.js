const Profile= (props) => {

    return (
      <div>
        
        <ul>
          { props.Profiles.map((post) => 
            <li key={post.id}>{post.postcontent}</li>
          ) }
        </ul>
      </div>
    );
  }
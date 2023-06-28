
const Posts = (props) => {

  return (
    <div>
      
      <ul>
        { props.posts.map((post) => 
          <li key={post.id}>{post.postcontent}</li>
        ) }
      </ul>
    </div>
  );
}
import React from 'react';

export default function AuthorCreatedStories(props) {
    return (
      <div>
        <h4>Your story is successfully published:</h4>
        {props.authorStories}
        <h5>Please check other authors published story:</h5>
        {props.allAuthorsStories}
      </div>
    )
}

// class AuthorCreatedStories extends Component {
//
//   render() {
//
//     return (
//       <div>
//         <h4>Your story is successfully published:</h4>
//         {this.props.authorStories}
//
//         <h5>Please check other authors published story:</h5>
//         {this.props.allAuthorsStories}
//
//       </div>
//     )
//   }
// }
//
// export default AuthorCreatedStories

import ExpandableText from "./components/ExpandableText";

const lorem500 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consequuntur necessitatibus sapiente quibusdam voluptates minus natus, enim illum saepe eius corrupti accusamus animi, rerum placeat voluptate reiciendis optio nihil vel delectus. Doloribus asperiores voluptatum, ducimus vero obcaecati sapiente error suscipit minus placeat rerum delectus enim veniam mollitia iste dolorem officiis?";
function App() {
  return (
    <div>
      <ExpandableText text={lorem500} maxLength={10} />
    </div>
  );
}

export default App;

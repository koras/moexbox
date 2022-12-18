import "./../App.css";
import ContentBox from "../component/ContentBox";

function Profile() {
  return (
    <ContentBox>
    <div>
      <div>Ваш рейтинг:0</div> 
    </div> 
    <div>
      <div>Добавленные события: 0</div>
      <div>Опубликованные события: 0</div>
      <div>Проверили: 0</div>
    </div> 
    </ContentBox>
  );
}

export default Profile;

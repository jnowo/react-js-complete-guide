import Card from "../UI/Card";
import styles from './UserList.module.css';

export const UserList = props => {

  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map(user => {
          <li>{user.name} ({user.age} years old)</li>
        })}
      </ul>
    </Card>
  )

}
import classes from './NotAuthorized.module.scss'

export default function NotAuthorized() {
  return (
    <div className={classes.error}>
      <span>Try to Log In</span>
    </div>
  )
}
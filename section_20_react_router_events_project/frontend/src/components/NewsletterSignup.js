import classes from './NewsletterSignup.module.css';
import {useFetcher} from "react-router-dom";
import {useEffect} from "react";

function NewsletterSignup() {

  const fetcher = useFetcher();
  // fetcher.Form still trigger action, but it will not initialize route transition
  // fetcher should be used whenever you want to trigger an action but not initialize route transition
  // use when you want to trigger action or loader without loading the page (ROUTE TRANSITION) to which this action/loader belongs
  const {data, state} = fetcher;

  useEffect(() => {
      if (state === 'idle' && data && data.message) {
        window.alert(data.message);
      }
    }, [data, state]
  )
  ;
  return (
    <fetcher.Form method="post" action='/newsletter' className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
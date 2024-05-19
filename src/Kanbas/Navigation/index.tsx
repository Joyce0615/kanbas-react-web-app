export default function KanbasNavigation() {
    return (
        //target="_blank": open the link in a new window
      <ul id="wd-kanbas-navigation">
        <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/">
            <img src="/images/neu.png" width="75px" /></a>
        <li><a id="wd-account-link" href="#/Kanbas/Account">Account</a></li>
        <li><a id="wd-dashboard-link" href="#/Kanbas/Dashboard">Dashboard</a></li>
        <li><a id="wd-course-link" href="#/Kanbas/Courses">Courses</a></li>
        <li><a id="wd-calendar-link" href="#/Kanbas/Calendar">Calendar</a></li>
        <li><a id="wd-inbox-link" href="#/Kanbas/Inbox">Inbox</a></li>
        <li><a id="wd-labs-link" href="#/Labs">Labs</a></li>
      </ul>
    );
  }
  
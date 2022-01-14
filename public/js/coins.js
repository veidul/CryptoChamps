const joinTournament = async (event) => {
  event.preventDefault();
  const user = userId;
  console.log(event, user);
  console.log(user);
  if (tourneyId) {
    const response = await fetch(`/api/tournament`, {
      method: "POST",
      body: JSON.stringify({
        user_id: user,
        tourney_id: tourneyId,
        wallet: JSON.stringify(tickers),
      }),
      headers: { "Content-Type": "application/json" },
    });
    // if (response.ok) {
    //    const resp = await fetch('/api/wallet/', {
    //        method: 'POST',
    //        body:JSON.stringify({tickers}),
    //        headers: {'Content-Type': 'application/json'}
    //    })
    if (response.ok) {
      document.location.replace("/homepage");
    }
    // } else {
    //   alert(response.statusText);
    // }
  }
  //dslkj
};
const createTournament = async (event) => {
  event.preventDefault();
  const user = userId;
  console.log(event, user);
  console.log(user);
  const start = new Date(Date.now() + 3600000 * 24)
    .moment()
    .format("dddd, MMMM Do YYYY, h:mm:ss a");
  const finish = new Date(Date.now() + 3600000 * 24 * 2)
    .moment()
    .format("dddd, MMMM Do YYYY, h:mm:ss a");

  const response = await fetch(`/api/tournament/create`, {
    method: "POST",
    body: JSON.stringify({
      startTime: start,
      finishTime: finish,
      user_id: user,
      wallet: JSON.stringify(tickers),
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/homepage");
  }
};

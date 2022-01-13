const joinTournament = async (event) => {
    event.preventDefault();
    const user = userId
    console.log(event,user)
 console.log(user)
    if (tourneyId) {
        const id=tourneyId
        
      const response = await fetch(`/api/tournament/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ user, id }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        //  const resp = await fetch('/wallet/', {
        //      method: 'POST',
        //      body:JSON.stringify({tickers}),
        //      headers: {'Content-Type': 'application/json'}
        //  }) 
        //  if (resp.ok) {

             document.location.replace('/homepage');
         }
      } else {
        alert(response.statusText);
      }
    }
//   };

  
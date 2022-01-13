// const joinTournament = async (event) => {
//     event.preventDefault();
//     const id = req.query.id
//     const userData = await User.findByPk(req.session.user_id, {
//         attributes: { exclude: ['password'] },
//       });
//     const user = userData.get({ plain: true })
//     const userId = user.id
//     if (id) {
//       const response = await fetch('/api/tourney/:id', {
//         method: 'PUT',
//         body: JSON.stringify({ id, userId }),
//         headers: { 'Content-Type': 'application/json' },
//       });
//       if (response.ok) {
          
//         document.location.replace('/homepage');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };
//   document
//     .querySelector('#join-tournament')
//     .addEventListener('submit', joinTournament);
  
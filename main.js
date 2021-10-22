const socialMedia = {
  github: 'yurikb',
  youtube: 'channel/UC5unSJMSerFzI38OePlA4uA',
  facebook: 'yuri.kollerborba',
  instagram: 'yurikb1',
  twitter: 'yuriwee'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${socialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()

// ARROW FUNCTIONS

const candidateAmount = parseInt(prompt('Number of candidates?'));
let candidates = []

for (i = 1; i <= candidateAmount; i++) {
  let candidate = {name: '', votes: 0}
  candidate.name = prompt(`Name for candidate ${i}`)
  candidates.push(candidate)
}

const voterAmount = parseInt(prompt('Number of voters'))
for (i = 1; i <= voterAmount; i++) {
  let candidateName = prompt(`Voter no. ${i} cast your vote`)
  let candidate = candidates.find(c => c.name === candidateName)
  if (candidate) {
    candidate.votes++
  }
}
let sortedCandidates = candidates.slice()
sortedCandidates.sort((a, b) => {
  return b.votes - a.votes
})
console.log(`The winner is ${sortedCandidates[0].name} with ${sortedCandidates[0].votes} votes`)
console.log('results:')
for (i = 0; i < candidates.length; i++) {
  console.log(`${sortedCandidates[i].name}: ${sortedCandidates[i].votes}`)
}
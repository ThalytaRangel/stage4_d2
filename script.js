const students =  [
  {
    name: 'John',
    n1: 8.5,
    n2: 7,
  },
  {
    name: 'Thalyta',
    n1: 9.5,
    n2: 9,
  },
  {
    name: 'Julia',
    n1: 5.5,
    n2: 7.5,
  },
  {
    name: 'Carlos',
    n1: 4.5,
    n2: 6,
  }
]

function average(n1, n2) {
  return (n1 + n2) / 2
}


function averageResult(student) {
  let result = average(student.n1, student.n2)

  if(result < 7) {
     alert(`A média do(a) aluno(a) ${student.name} foi de ${result} \n
    Não foi dessa vez, ${student.name}! Tente novamente!`)
  }
  else {
   alert(`A média do(a) aluno(a) ${student.name} foi de ${result} \n
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  }
}

for(let student of students) {
  let mensage = averageResult(student)  
}
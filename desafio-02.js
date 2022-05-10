function TeacherClass() {
  const tempo = [-1, -1, 1, 0];

  let x = 0;
  tempo.forEach((item) => {
    if (item <= 0) {
      x++;
      if (x >= 3) {
        console.log("Aula normal");
      }
    }
  });
  if (x < 3) {
    console.log("Aula cancelada");
  }
}

TeacherClass();

//Design a Simple Automaton (Finite State Machine)


class Automaton{
    //indexes from zero q1=q0, q2=q1, q3=q2
    gammaTable = [
        [0, 1],
        [2, 1],
        [1, 1]
    ];
    currentState = 0;
    acceptedState = 1;
    readCommands(com) {
     this.currentState = 0;
      com.forEach((element) =>{ 
          this.currentState = this.gammaTable[this.currentState][Number(element)];
        });
        return this.currentState==this.acceptedState;
    }
}

var myAutomaton = new Automaton();

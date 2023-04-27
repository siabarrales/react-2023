import {useState} from 'react'
import confetti from 'canvas-confetti'
import {Square} from './components/Square'
import {TURNS} from './constants'
import {checkWinnerFrom, checkEndGame} from './logic/board'
import {WinnerModal} from './components/WinnerModal'
import {Board} from './components/Board'


function App() { 
  const [board, setBoard] = useState(() => {
    const boardFromStorage = localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
    })
  //null = no hay ganador, false = empate, X o O = ganador
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    cleanLocalStorage()
  }

  const cleanLocalStorage = () => {
    localStorage.removeItem('board')
    localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    if(board[index] || winner) return
    //nunca hay que mutar los estados, hacemos una copia y la modificamos
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //Guardar partida
    localStorage.setItem('board', JSON.stringify(newBoard))
    localStorage.setItem('turn', newTurn)

    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner) {
      confetti()
      setWinner(newWinner)
      cleanLocalStorage()
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
      cleanLocalStorage()
    }
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reiniciar juego</button>
      <Board board={board} updateBoard={updateBoard}/>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

     <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App

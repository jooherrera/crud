export class Frase {
  constructor() {
    this.frase = ['Frase', 'Inicial']
  }
  get() {
    return this.frase.join(' ')
  }

  getByPos(pos) {
    const palabra = this.frase[pos]
    return palabra
  }

  add(palabra) {
    this.frase.push(palabra)
    return { agregada: palabra, pos: this.frase.length }
  }

  update(posicion, palabraNueva) {
    const palabraAnterior = this.frase[posicion]
    this.frase[posicion] = palabraNueva
    return { actualizada: palabraNueva, anterior: palabraAnterior }
  }

  delete(posicion) {
    this.frase.splice(posicion, 1)
    return 'Palabra eliminada'
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

lancamentos = [
  {id: 1, usuario: "tarcisio", conta:"", entidade: "", TipoLancamento:"", valor: "", calendario:""},
  {id: 2, usuario: "tarcisio", conta:"", entidade: "", TipoLancamento:"", valor: "", calendario:""},
  {id: 3, usuario: "tarcisio", conta:"", entidade: "", TipoLancamento:"", valor: "", calendario:""},
  {id: 4, usuario: "tarcisio", conta:"", entidade: "", TipoLancamento:"", valor: "", calendario:""}
]
  constructor() { }

  public getLancamentos(){
    return this.lancamentos
  }

  public createLancamentos(lancamento: {id, usuario, conta, entidade, TipoLancamento, valor, calendario}){
    this.lancamentos.push(lancamento);
  }
}

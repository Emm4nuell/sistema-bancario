import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/shared/models/Cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit{

  formgroup: FormGroup;
  
  cliente: Cliente ={
    id: null,
    nome: "",
    cpf: "",
    email: "",
    observacoes: "",
    ativo: true
  };

  ngOnInit(): void {}
  
  constructor(private clienteService: ClienteService){
    this.formgroup = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      observacoes: new FormControl('', Validators.required),
      ativo: new FormControl(true),
    })
  }

  createClient(): void {
    this.clienteService.post(this.cliente).subscribe({
      next(value) {
        console.log("Usuario criado com sucesso! --> ", value)
      },error(err) {
        console.error(err.error)
      },
    });
  }
}

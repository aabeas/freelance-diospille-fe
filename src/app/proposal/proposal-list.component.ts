import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(212, 'Xyz Organization', 'https://portfolio.eravodua.io', 'Ruby on Rails', 150, 120, 15, 'poc@eravodua.io')
  proposalTwo: Proposal = new Proposal(213, 'Ghi Company', 'https://portfolio.eravodua.io', 'Python on Django', 130, 110, 10, 'poc@eravodua.io')
  proposalThree: Proposal = new Proposal(214, 'Mno Limited', 'https://portfolio.eravodua.io', 'Ruby on Rails', 100, 80, 18, 'poc@eravodua.io')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}

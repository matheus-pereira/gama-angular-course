import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to aula3-testes!');
  });
  
  it('ao clicar 3 vezes no aumentar deve ser 3', () => {
    page.navigateTo();
    page.getAumentarButton().click();
    page.getAumentarButton().click();
    page.getAumentarButton().click();
    expect(page.getContadorText()).toEqual('3');
  });

  it('ao clicar 3 vezes no diminuir deve ser -3', () => {
    page.navigateTo();
    page.getDiminuirButton().click();
    page.getDiminuirButton().click();
    page.getDiminuirButton().click();
    expect(page.getContadorText()).toEqual('-3');
  });
});

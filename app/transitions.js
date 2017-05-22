
export default function() {
  this.transition(
    this.fromRoute('index'),
    this.toRoute('travel'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('speaking'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('contact'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('speaking'),
    this.toRoute('travel'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('speaking'),
    this.toRoute('contact'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('travel'),
    this.toRoute('contact'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
import { Publisher, Subjects, TicketCreatedEvent } from '@irtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}


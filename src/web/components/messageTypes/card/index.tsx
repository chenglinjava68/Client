import React from 'react';
import Base from '../Base';

import DefaultCard from './DefaultCard';
import BaseCard from './BaseCard';
import FriendInvite from './FriendInvite';
import GroupRequest from './GroupRequest';
import GroupInvite from './GroupInvite';
import DiceRequest from './DiceRequest';
import DiceInvite from './DiceInvite';
import Actor from './Actor';

const CardType = {
  default: DefaultCard,
  friendInvite: FriendInvite,
  groupRequest: GroupRequest,
  groupInvite: GroupInvite,
  diceRequest: DiceRequest,
  diceInvite: DiceInvite,
  actor: Actor,

  // alias
  groupRequestSuccess: BaseCard,
  groupRequestFail: BaseCard,
};

class Card extends Base {
  getContent() {
    const info = this.props.info;
    const data = info.data!;
    const Card = CardType[data.type] || CardType['default'];

    return <Card {...this.props} />;
  }
}

export default Card;

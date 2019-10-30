import { Record, List } from 'immutable';

export interface ActorType {
  id: number;
  uuid: string;
  name: string;
  desc: string;
  avatar: string;
  info: ActorDataType;
  template_uuid: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  ownerId: number;
}

export interface ActorDataType {
  [key: string]: string;
}

export type ActorState = Record<{
  isFindingTemplate: boolean;
  suggestTemplate: List<any>;
  findingResult: List<any>;
  currentEditedTemplate: Record<{
    uuid: string;
    name: string;
    desc: string;
    avatar: string;
    info: string;
  }>;
  selfTemplate: List<any>;
  selectedTemplate: any;
  selfActors: List<any>;
  selectedActorUUID: string;
}>;

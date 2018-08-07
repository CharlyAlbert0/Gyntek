import { Injectable } from '@angular/core';
import {GlobalAttributesModel} from '../../globalattributes/model/globalattributesmodel';
import { EnumLanguage } from '../../enums/enumlanguage';
import { LanguageModel } from '../../Languages/model/languague.model';

Injectable();
export class SystemContext {
    APIURL: string;
    SSOURL: string;
    EndSession: boolean;
    public menuItems: any[];
    CurrentGlobalAttributes: GlobalAttributesModel[];
    public LanguageApp: number;
    public Language: LanguageModel;
}

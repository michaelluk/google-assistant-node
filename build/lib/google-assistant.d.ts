/// <reference types="node" />
import * as events from "events";
import * as constants from "./constants";
import { AudioInOptions, AudioOutOptions, DeviceOptions } from "./options";
import { AssistantConfig } from "./config";
declare class GoogleAssistant extends events.EventEmitter {
    static Constants: typeof constants;
    private state;
    private service;
    private channel;
    private converter;
    private assistConfig;
    private conversationState;
    private textQuery;
    private languageCode;
    private audioInConfig;
    private audioOutConfig;
    private dialogStateIn;
    private deviceConfig;
    constructor(config: AssistantConfig);
    setDeviceConfig(config: DeviceOptions): void;
    setInputConfig(config?: AudioInOptions): void;
    setLanguageCode(languageCode: string): void;
    setOutputConfig(config: AudioOutOptions): void;
    private _updateAssistConfig();
    authenticate(authClient: any): void;
    assist(textQuery?: string): void;
    writeAudio(data: any): void;
    say(sentence: string): void;
    private _handleEndOfUtterance(response);
    private _handleAssistResponse(response);
    private _handleAudioOut(response);
    private _handleSpeechResults(response);
    private _handleDialogStateOut(state);
    private _handleConversationState(state);
    _handleConversationEnd(): void;
    _handleError(error: any): void;
    stop(): void;
}
export = GoogleAssistant;
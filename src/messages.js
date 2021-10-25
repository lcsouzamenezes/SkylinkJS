const MESSAGES = {
  INIT: {
    ERRORS: {
      NO_ADAPTER: 'AdapterJS dependency is not loaded or incorrect AdapterJS dependency is used',
      NO_SOCKET_IO: 'Socket.io not loaded - Please load socket.io',
      NO_FETCH_SUPPORT: 'Fetch API is not supported in your browser. Please make sure you are using a modern browser: https://caniuse.com/#search=fetch',
      NO_APP_KEY: 'Please provide an App Key - Get one at console.temasys.io!',
      AUTH_CORS: 'Promise rejected due to CORS forbidden request - Please visit: http://support.temasys.com.sg/support/solutions/articles/12000006761-i-get-a-403-forbidden-access-is-denied-when-i-load-the-application-why-',
      AUTH_GENERAL: 'Promise rejected due to authentication issue',
      SOCKET_CREATE_FAILED: 'Failed creating socket connection object ->',
      SOCKET_ERROR_ABORT: 'Reconnection aborted as the connection timed out or there no more available ports, transports and final attempts left',
    },
    INCOMPATIBLE_BROWSER: 'Incompatible browser agent detected',
    INFO: {
      API_SUCCESS: 'Promise resolved: APP Authenticated Successfully!',
    },
  },
  SOCKET: {
    ABORT_RECONNECT: 'Aborting socket reconnect',
  },
  JOIN_ROOM: {
    ERRORS: {
      CODEC_SUPPORT: 'No audio/video codecs available to start connection',
    },
    AUTO_BANDWIDTH_DEPRECATED: 'autoBandwidthAdjustment option in joinRoom method has been deprecated',
  },
  ROOM: {
    ERRORS: {
      STOP: {
        SCREEN_SHARE: 'Error stopping screenshare',
      },
      NOT_IN_ROOM: 'User is not in room',
      NO_PEERS: 'No peers in room',
    },
    LEAVE_ROOM: {
      ERROR: 'Leave room error -->',
      NO_PEERS: 'No peers in room',
      DROPPING_HANGUP: 'Dropping hang-up from remote peer',
      DROPPING_DUPLICATE_BYE: 'Dropping duplicate bye',
      LEAVE_ALL_ROOMS: {
        SUCCESS: 'Successfully left all rooms',
        ERROR: 'Leave all rooms error -->',
      },
      PEER_LEFT: {
        START: 'Initiating peer left process',
        SUCCESS: 'Successfully completed peer left process',
        ERROR: 'Failed peer left process',
      },
      SENDING_BYE: 'Sending bye message to all peers',
      DISCONNECT_SOCKET: {
        SUCCESS: 'Successfully disconnected socket',
      },
      REMOVE_STATE: {
        SUCCESS: 'Successfully removed room state',
      },
    },
  },
  ROOM_STATE: {
    NOT_FOUND: 'Could not retrieve room state for room name/key',
    LEFT: 'Peer left room',
    NO_ROOM_NAME: 'No room name specified',
  },
  PEER_INFORMATIONS: {
    NO_PEER_INFO: 'Not able to retrieve Peer Information for peerId:',
    UPDATE_USER_DATA: 'Peer updated userData: ',
    OUTDATED_MSG: 'Dropping outdated status ->',
    USER_DATA_NOT_JSON: 'UserData is not JSON',
    SET_PEER_PRIORITY_WEIGHT: 'Setting peerPriorityWeight with tiebreaker value from inRoom signalling message',
  },
  PEER_CONNECTION: {
    NOT_INITIALISED: 'Peer Connection not initialised',
    CREATE_NEW: 'Creating new Peer Connection',
    NO_PEER_CONNECTION: 'No Peer Connection detected',
    PEER_CONNECTION_CLOSED: 'Peer Connection is closed',
    PEER_ID_NOT_FOUND: 'Peer Id not found',
    STATE_CHANGE: 'Peer connection state changed ->',
    STATS_API_UNAVAILABLE: 'getStats() API is not available',
    MCU: 'MCU connected',
    FAILED_STATE: 'Peer Connection state: failed',
    ADD_TRANSCEIVER: 'Adding empty transceiver',
    SDP_ERROR: 'Sdp error',
    ERRORS: {
      REMOVE_TRACK: 'Error removing track from peer connection',
      NOT_FOUND: 'Peer Connection not found',
      NOT_STABLE: 'Peer Connection is not stable',
    },
    REFRESH_CONNECTION: {
      START: 'Refreshing peer connections',
      SUCCESS: 'Peer Connection refreshed successfully',
      FAILED: 'Peer Connection failed to refresh',
      COMPLETED: 'All Peer Connections refreshed with resolve or errors',
      RESTART_ICE_UNAVAILABLE: 'Dropping iceRestart option as it is not available on the peer connection',
      NOT_SUPPORTED: 'Refresh connection not supported by browser',
      SEND_RESTART_OFFER: 'Sending restart offer message to signaling server',
      NO_LOCAL_DESCRIPTION: 'No localDescription set to connection. There could be a handshaking step error.',
    },
  },
  PEER_PRIVILEGED: {
    not_privileged: 'Please upgrade your key to privileged to use this function',
    no_appkey: 'App key is not defined - Please authenticate again',
    getPeerListFromServer: 'Enquired server for peers within the App space',
  },
  ICE_CONNECTION: {
    END_OF_CANDIDATES_SUCCESS: 'Signaling of end-of-candidates remote ICE gathering',
    END_OF_CANDIDATES_FAILURE: 'Failed signaling of end-of-candidates remote ICE gathering',
    ICE_GATHERING_STARTED: 'ICE gathering has started',
    ICE_GATHERING_COMPLETED: 'ICE gathering has completed',
    DROP_EOC: 'Dropping of sending ICE candidate end-of-candidates signal or unused ICE candidates ->',
    STATE_CHANGE: 'Ice connection state changed ->',
    TURN_NOT_ENABLED: 'TURN is not enabled but forceTURN init options is enforced',
  },
  ICE_CANDIDATE: {
    DROPPING_CANDIDATE: 'Dropping ICE candidate',
    INVALID_CANDIDATE: 'Received invalid ICE candidate message ->',
    VALID_CANDIDATE: 'Received ICE candidate ->',
    FILTERED_CANDIDATE: 'Dropping received ICE candidate as it matches ICE candidate filtering flag ->',
    FILTERING_FLAG_NOT_HONOURED: 'Not dropping received ICE candidate even though TURN connections are enforced as MCU is present (and act as a'
      + ' TURN itself) so filtering of ICE candidate flags are not honoured ->',
    CANDIDATE_ADDED: 'Added ICE candidate successfully',
    ADDING_CANDIDATE: 'Adding ICE Candidate',
    FAILED_ADDING_CANDIDATE: 'Failed adding ICE candidate ->',
    ADD_BUFFERED_CANDIDATE: 'Adding buffered ICE candidate',
    ADD_CANDIDATE_TO_BUFFER: 'Adding ICE candidate to buffer',
    CANDIDATE_GENERATED: 'Generated ICE candidate ->',
    SENDING_CANDIDATE: 'Sending ICE candidate ->',
    NO_SDP_MID: 'No mid for the candidate in sdp',
  },
  SESSION_DESCRIPTION: {
    parsing_media_ssrc: 'Parsing session description media SSRCs ->',
  },
  DATA_CHANNEL: {
    NO_DATA_CHANNEL_CONNECTION: 'No Data Channel connection',
    DATA_CHANNEL_NOT_OPEN: 'Data Channel connection is not open',
    DATA_CHANNEL_DISABLED: 'Data Channel is disabled',
    CLOSING: 'Closing Data Channel',
    NO_REMOTE_DATA_CHANNEL: 'Remote peer does not have Data Channel',
    RECEIVED_CHUNK: 'Received binary string data chunk',
    reviving_dataChannel: 'Reviving Datachannel connection',
    refresh_error: 'Not a valid Datachannel connection',
    closed: 'Datachannel has closed',
    onclose_error: 'Error in data-channel onclose callback',
    DATA_TRANSFER_UPLOAD_TERMINATED: 'Data upload terminated',
    DATA_TRANSFER_DOWNLOAD_TERMINATED: 'Data download terminated',
    DATA_TRANSFER_CANCEL_TERMINATED: 'Cancel data transfer terminated',
    IGNORE_TIMEOUT: 'Ignoring data transfer timeout',
    CLEAR_TIMEOUT: 'Clearing data transfer timeout',
    SET_TIMEOUT: 'Setting data transfer timeout',
    DATA_TRANSFER_COMPLETED: 'Data transfer completed',
    UNABLE_TO_SEND_BLOB: 'Unable to send Blob data',
    DATA_TRANSFER_ERROR: 'Data transfer error',
    CANCEL_DATA_TRANSFER: 'Peer cancelled data transfer',
    RECEIVED_P2P_MESSAGE: 'Received P2P message',
    DATA_TRANSFER_STATE: 'Data transfer state',
    CHUNKING_BLOB: 'Chunking Blob data',
    ERRORS: {
      PEER_ID_INVALID_TYPE: 'Peer ID is not type array string or string',
      TIMEOUT_INVALID_TYPE: 'Timeout is not type number',
      REMOTE_REJECTED_TRANSFER: 'Remote peer rejected data transfer request',
      USER_REJECTED_TRANSFER: 'User rejected data transfer request',
      REMOTE_CANCELLED_TRANSFER: 'Remote peer cancelled data transfer',
      USER_CANCELLED_TRANSFER: 'User cancelled data transfer',
      NOT_BLOB: 'Data is not type Blob',
      INVALID_DATA: 'Invalid data',
      FAILED_CLOSING: 'Failed closing Data Channels',
      NO_SESSIONS: 'Peer Connection does not have Data Channel sessions',
      DROP_SENDING_MESSAGE: 'Drop sending message',
      FAILED_SENDING_MESSAGE: 'Failed sending message',
      FAILED_PARSING_PROTOCOL: 'Failed parsing protocol data',
      DISCARDING_DATA_CHUNK: 'Discarding data chunk',
      CHUNK_ADDED: 'Data chunk has been added',
      CANCEL_TRANSFER: 'Received cancel data transfer from peer',
      RECEIVED_ERROR: 'Received error from peer',
      DATA_TRANSFER_TIMEOUT: 'Data transfer connection timed out',
      NO_DATA_TRANSFER_SESSION: 'No data transfer sessions',
      NO_TRANSFER_ID: 'No Transfer ID',
      NO_PEER_ID: 'No Peer ID',
      DATA_TRANSFER_IN_PROGRESS: 'Data Channel has a transfer in progress',
      MCU_NOT_SUPPORTED: 'MCU does not support sendBlobData',
    },
  },
  NEGOTIATION_PROGRESS: {
    SET_LOCAL_DESCRIPTION: 'Successfully set local description -->',
    SET_REMOTE_DESCRIPTION: 'Successfully set remote description -->',
    APPLYING_BUFFERED_REMOTE_OFFER: 'Applying buffered remote offer',
    BUFFERING_RESTART: 'Buffering restart offer until \'negotiated\' state is reached',
    APPLY_BUFFERED_RESTART: 'Applying buffered restart offer now that \'negotiated\' state is reached',
    ERRORS: {
      FAILED_SET_LOCAL_DESCRIPTION: 'Failed setting local description -->',
      FAILED_SET_REMOTE_DESCRIPTION: 'Failed setting remote description -->',
      FAILED_SET_REMOTE_ANSWER: 'Remote Peer failed to set answer.',
      FAILED_PROCESSING_OFFER: 'Failed processing OFFER ->',
      FAILED_PROCESSING_ANSWER: 'Failed processing ANSWER ->',
      FAILED_PROCESSING_ANSWER_ACK: 'Failed processing ANSWER_ACK ->',
      FAILED_RENEGOTIATION: 'Failed renegotiation after answerAck',
      OFFER_TIEBREAKER: 'Dropping the received offer: self weight is greater than incoming offer weight -->',
      NO_LOCAL_BUFFERED_OFFER: 'FATAL: No buffered local offer found - Unable to setLocalDescription',
      ADDING_REMOTE_OFFER_TO_BUFFER: 'Adding remote offer received to buffer as current negotiation has not completed',
      STOP_RENEGOTIATION_FORCE_TURN: 'Stopping renegotiation as TURN is not enabled but forceTURN in init options is enforced',
      DROPPING_ANSWER: 'Dropping ANSWER as previous negotiation state is not \'LOCAL_OFFER_SENT\'',
      DROPPING_ANSWER_ACK: 'Dropping ANSWER_ACK as previous negotiation state is not \'LOCAL_ANSWER_SET\'',
      DROPPING_WELCOME_NEG_STATE: 'Dropping WELCOME as previous negotiation state is not \'undefined\'',
      DROPPING_WELCOME_MCU_FORWARDED: 'Dropping extra WELCOME from remote peer in MCU room',
    },
  },
  SIGNALING: {
    MESSAGE_ADDED_TO_BUFFER: 'Message buffered as enter message has not been sent',
    ENTER_LISTENER: 'Enter listener initialized',
    BUFFERED_MESSAGES_SENT: 'Buffered messages sent',
    BUFFERED_MESSAGES_DROPPED: 'Buffered messages dropped - no mid',
    OUTDATED_MSG: 'Dropping outdated status ->',
    DROPPING_MUTE_EVENT: 'Dropping mute audio / video event message as it is processed by mediaInfoEvent',
    BUFFER_NOT_NEEDED: 'Enter message sent. Messages do not need to be buffered',
    ABORTING_OFFER: 'Aborting offer as current negotiation has not completed',
    DROPPING_ENTER: 'Dropping enter message as inRoom message has not been received',
  },
  MESSAGING: {
    PRIVATE_MESSAGE: 'Sending private message to Peer',
    BROADCAST_MESSAGE: 'Broadcasting message to Peers',
    RECEIVED_MESSAGE: 'Received message from Peer',
    PERSISTENCE: {
      SEND_MESSAGE: 'Sending persisted message',
      NOT_PERSISTED: 'Message will not be persisted as persistent flag is set to false',
      STORED_MESSAGES: 'Received stored messages for room',
      IS_PERSISTENT_CONFIG: 'Persistent message flag is set to',
      ERRORS: {
        FAILED_SETTING_PERSISTENCE: 'Failed setting persistent message flag',
        INVALID_TYPE: 'Persistent message flag must be of type boolean',
        PRIVATE_MESSAGE: 'Cannot persist private messages',
        PERSISTENT_MESSAGE_FEATURE_NOT_ENABLED: 'Persistent Message feature is not enabled. Enable'
          + ' this feature on the key under \'Advanced Settings\' in the Temasys Console',
      },
    },
    ENCRYPTION: {
      SEND_MESSAGE: 'Sending encrypted message',
      DELETE_ALL: 'Deleting all stored secrets',
      ERRORS: {
        FAILED_DECRYPTING_MESSAGE: 'Failed decrypting message',
        ENCRYPT_SECRET: 'Incorrect secret provided',
        INVALID_SECRETS: 'No or invalid secret and secret id provided',
        SET_SELECTED_SECRET: 'Failed setting selected secret',
        DELETE_ENCRYPT_SECRETS: 'Failed deleting secret',
        SET_ENCRYPT_SECRET: 'Failed setting secret',
        SECRET_ID_NOT_FOUND: 'Secret id not found',
        NO_SECRET_OR_SECRET_ID: 'Secret and / or secret id not provided',
        INVALID_TYPE: 'Secret and secret id must be of type string and not empty',
        SECRET_ID_NOT_UNIQUE: 'Secret id provided is not unique',
        SECRET_ID_NOT_SELECTED: 'Secret id not selected',
        SECRET_ID_NOT_PROVIDED: 'Secret id not provided',
        SECRETS_NOT_PROVIDED: 'Secrets not provided',
      },
    },
    ERRORS: {
      DROPPING_MESSAGE: 'Dropping message',
      FAILED_SENDING_MESSAGE: 'Failed to send user message',
    },
  },
  MEDIA_INFO: {
    UPDATE_SUCCESS: 'Successfully updated media info',
    ERRORS: {
      NO_ASSOCIATED_STREAM_ID: 'There is no streamId associated with the mediaId and transceiverMid pair',
      FAILED_PROCESSING_MEDIA_INFO_EVENT: 'Failed to process mediaInfoEvent message',
      FAILED_UPDATING: 'Failed to update media info',
      FAILED_PROCESSING_PEER_MEDIA: 'Failed to process media info',
      FAILED_UPDATING_TRANSCEIVER_MID: 'Failed updating media info transceiverMid after setLocalDescription',
      FAILED_SETTING_PEER_MEDIA_INFO: 'Failed setting peer media at offer / answer',
      STREAM_ID_NOT_MATCHED: 'There is no mediaInfo associated with the streamId',
    },
    WARN: {
      READ_ONLY_VALUE: 'Attempting to change media info read only value: ',
      INVALID_MEDIA_TYPE: 'Invalid media info media type: ',
    },
    VIDEO_STATE_CHANGE: 'Peers\'s video state changed to ->',
    AUDIO_STATE_CHANGE: 'Peers\'s audio state changed to ->',
    VIDEO_SCREEN_STATE_CHANGE: 'Peers\'s video screen state changed to ->',
  },
  MEDIA_STREAM: {
    STOP_SETTINGS: 'Stopped streams with settings:',
    STOP_SUCCESS: 'Successfully stopped stream',
    REMOTE_TRACK_REMOVED: 'Remote MediaStreamTrack removed',
    START_FALLBACK: 'Fall back to retrieve audio only stream',
    NO_OPTIONS: 'No user media options provided',
    DEFAULT_OPTIONS: 'Using default options',
    FALLBACK_SUCCESS: 'Successfully retrieved audio fallback stream',
    START_SCREEN_SUCCESS: 'Successfully retrieved screen share stream',
    STOP_SCREEN_SUCCESS: 'Successfully stopped screen share stream',
    UPDATE_MUTED_SETTINGS: 'Updated stream muted setting',
    UPDATE_MEDIA_STATUS: 'Updated stream media status',
    AUDIO_MUTED: 'Peers\'s audio muted: ',
    VIDEO_MUTED: 'Peers\'s video muted: ',
    ERRORS: {
      STOP_SCREEN: 'Error stopping screen share stream',
      START_SCREEN: 'Error starting screen share stream',
      STOP_ADDED_STREAM: 'Error stopping added stream',
      STOP_USER_MEDIA: 'Error stopping user media',
      STOP_AUDIO_TRACK: 'Error stopping audio tracks in stream',
      STOP_VIDEO_TRACK: 'Error stopping video tracks in stream',
      STOP_MEDIA_TRACK: 'Error stopping MediaTrack',
      STOP_SCREEN_TRACK: 'Error stopping screen track in stream',
      DROPPING_ONREMOVETRACK: 'Dropping onremovetrack',
      NO_STREAM: 'No stream to process',
      INVALID_STREAM_ID: 'No stream detected with stream id',
      NO_USER_MEDIA_STREAMS: 'No user media streams detected',
      INVALID_STREAM_ID_TYPE: 'Stream id is not a string',
      NO_STREAM_ID: 'No stream id provided',
      PEER_SCREEN_ACTIVE: 'Peer has existing screen share',
      FALLBACK: 'Error retrieving fallback audio stream',
      INVALID_GUM_OPTIONS: 'Invalid user media options',
      INVALID_GDM_OPTIONS: 'Invalid display media options',
      GET_USER_MEDIA: 'Error retrieving stream from \'getUserMedia\' method',
      INVALID_MUTE_OPTIONS: 'Invalid muteStreams options provided',
      NO_STREAMS_MUTED: 'No streams to mute',
      SEND_STREAM: 'Error sending stream',
      INVALID_MEDIA_STREAM_ARRAY: 'Array is not of type MediaStream',
      INACTIVE_MEDIA_STREAM: 'One or more media streams is inactive',
      ACTIVE_STREAMS: 'There are currently active streams being sent to remote peers. Please stop streams.',
      INVALID_PREFETCHED_STREAMS: 'Invalid prefetched streams provided',
    },
  },
  STATS_MODULE: {
    NOT_INITIATED: 'Stats Module is not initiated',
    STATS_DISCARDED: 'Stats report discarded as peer has left the room',
    ERRORS: {
      RETRIEVE_STATS_FAILED: 'Failed retrieving stats',
      POST_FAILED: 'Failed posting to stats api',
      PARSE_FAILED: 'Failed parsing stats report',
      STATS_IS_NULL: 'Stats object is null',
      INVALID_TRACK_KIND: 'Media kind is not audio or video',
    },
    HANDLE_ICE_GATHERING_STATS: {
      PROCESS_FAILED: 'process_failed',
      PROCESS_SUCCESS: 'process_success',
      PROCESSING: 'processing',
      DROPPED: 'dropped',
      BUFFERED: 'buffered',
    },
    HANDLE_NEGOTIATION_STATS: {
      WELCOME: {
        dropped: 'dropped_welcome',
      },
      OFFER: {
        create: 'create_offer',
        create_error: 'error_create_offer',
        set: 'set_offer',
        set_error: 'error_set_offer',
        offer: 'offer',
        dropped: 'dropped_offer',
        error: 'error_offer',
      },
      ANSWER: {
        create: 'create_answer',
        create_error: 'error_create_answer',
        set: 'set_answer',
        set_error: 'error_set_ANSWER',
        answer: 'answer',
        dropped: 'dropped_answer',
        error: 'error_answer',
      },
      ANSWERACK: {
        error: 'error_answer_ack',
      },
    },
    HANDLE_DATA_CHANNEL_STATS: {
      open: 'open',
      closed: 'closed',
      reconnecting: 'reconnecting',
    },
    HANDLE_CONNECTION_STATS: {},
    HANDLE_BANDWIDTH_STATS: {
      RETRIEVE_FAILED: 'Failed posting bandwidth stats: ',
      NO_STATE: 'No room state',
    },
    HANDLE_ICE_CONNECTION_STATS: {
      RETRIEVE_FAILED: 'Failed retrieving stats: ',
      SEND_FAILED: 'Failed sending ice connection stats: ',
    },
    HANDLE_RECORDING_STATS: {
      START: 'start',
      STOP: 'stop',
      REQUEST_START: 'request-start',
      REQUEST_STOP: 'request-stop',
      ERROR_NO_MCU_START: 'error-no-mcu-start',
      ERROR_NO_MCU_STOP: 'error-no-mcu-stop',
      ERROR_START_ACTIVE: 'error-start-when-active',
      ERROR_STOP_ACTIVE: 'error-stop-when-active',
      ERROR_MIN_STOP: 'error-min-stop',
      MCU_RECORDING_ERROR: 'mcu-recording-error',
      REC_SERVER_UNAVAILABLE: 'rec-server-unavailable',
    },
  },
  RECORDING: {
    AVAILABLE: 'Recording server is available to start a recording',
    UNAVAILABLE: 'Recording server is unavailable to start a recording',
    START_SUCCESS: 'Started recording',
    STOP_SUCCESS: 'Stopped recording',
    START_FAILED: 'Failed to start recording',
    STOP_FAILED: 'Failed to stop recording',
    MIN_RECORDING_TIME_REACHED: '4 seconds has been recorded - Recording can be stopped now',
    ERRORS: {
      MCU_NOT_CONNECTED: 'MCU is not connected',
      EXISTING_RECORDING_IN_PROGRESS: 'There is an existing recording in-progress',
      NO_RECORDING_IN_PROGRESS: 'There is no existing recording in-progress',
      MIN_RECORDING_TIME: '4 seconds has not been recorded yet',
      STOP_ABRUPT: 'Recording stopped abruptly before 4 seconds',
      SESSION_EMPTY: 'Received request of "off" but the session is empty',
      MCU_RECORDING_ERROR: 'Recording error received from MCU',
      REC_SERVER_UNAVAILABLE: 'Recording server is unavailable to start a recording - retry later',
    },
  },
  RTMP: {
    start_no_mcu: 'Unable to start RTMP session as MCU is not connected',
    stop_no_mcu: 'Unable to stop RTMP as MCU is not connected',
    start_no_stream_id: 'Unable to start RTMP Session stream id is missing',
    start_no_endpoint: 'Unable to start RTMP Session as Endpoint is missing',
    starting_rtmp: 'Starting RTMP Session',
    stopping_rtmp: 'Stopping RTMP Session',
    message_received_from_sig: 'Received RTMP Session message ->',
    stop_session_empty: 'Received request of "off" but the session is empty',
    stopped_success: 'Stopped RTMP Session',
    started_success: 'Started RTMP Session',
    error_session_empty: 'Received error but the session is empty ->',
    error_session: 'RTMP session failure ->',
    error_Session_abrupt: 'Stopped RTMP session abruptly',
  },
  PERSISTENT_MESSAGE: {
    ERRORS: {
      NO_DEPENDENCY: 'CryptoJS is not available',
    },
  },
  UTILS: {
    INVALID_BROWSER_AGENT: 'Invalid browser agent',
    CONFIG_NOT_FOUND: 'Config not found',
  },
  LOGGER: {
    EVENT_DISPATCHED: 'Event dispatched',
    EVENT_REGISTERED: 'Event successfully registered',
    EVENT_UNREGISTERED: 'Event successfully unregistered',
    EVENT_DISPATCH_ERROR: 'Error dispatching event',
    EVENT_REGISTER_ERROR: 'Error registering event',
    EVENT_UNREGISTER_ERROR: 'Error unregistering event',
    LOGS_NOT_STORED: 'Store logs feature is not enabled. Enable it via SkylinkLogger.setLevel(logLevel, storeLogs)',
    LOGS_CLEARED: 'Stored logs cleared',
    INVALID_CB: 'Dropping listener as it is not a function',
  },
  BROWSER_AGENT: {
    REACT_NATIVE: {
      ERRORS: {
        DROPPING_ONREMOVETRACK: 'Dropping onremovetrack as trackInfo is malformed',
      },
    },
  },
};

export default MESSAGES;

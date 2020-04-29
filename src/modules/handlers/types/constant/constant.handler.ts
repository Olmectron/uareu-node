import * as ref from 'ref-napi';
import { ConstantInterface } from './constant.interface';

export const DPFPDD_SUCCESS: number = 0;
export const MAX_STR_LENGTH: number = 128;
export const MAX_DEVICE_NAME_LENGTH: number = 1024;
export const DPFJ_PROBABILITY_ONE: number = 0x7fffffff;

export const DPFPDD_DEV: ConstantInterface = {
    type: 'void *'
};

export const DPFJ_DEV: ConstantInterface = {
    type: 'void *'
};

export const DPFPDD_HW_MODALITY: ConstantInterface = {
    type: ref.types.uint,
    DPFPDD_HW_MODALITY_UNKNOWN: 0,
    DPFPDD_HW_MODALITY_SWIPE: 1,
    DPFPDD_HW_MODALITY_AREA: 2
};

export const DPFPDD_HW_TECHNOLOGY: ConstantInterface = {
    type: ref.types.uint,
    DP_HW_TECHNOLOGY_UNKNOWN: 0,
    DP_HW_TECHNOLOGY_OPTICAL: 1,
    DP_HW_TECHNOLOGY_CAPACITIVE: 2,
    DP_HW_TECHNOLOGY_THERMAL: 3,
    DP_HW_TECHNOLOGY_PRESSURE: 4
};

export const DPFPDD_PRIORITY: ConstantInterface = {
    type: ref.types.uint,
    DPFPDD_PRIORITY_COOPERATIVE: 2,
    DPFPDD_PRIORITY_EXCLUSIVE: 4
};

export const DPFPDD_STATUS: ConstantInterface = {
    type: ref.types.uint,
    DPFPDD_STATUS_READY: 0,
    DPFPDD_STATUS_BUSY: 1,
    DPFPDD_STATUS_NEED_CALIBRATION: 2,
    DPFPDD_STATUS_FAILURE: 3
};

export const DPFPDD_QUALITY: ConstantInterface = {
    type: ref.types.uint,
    DPFPDD_QUALITY_GOOD: 0,
    DPFPDD_QUALITY_TIMED_OUT: 1,
    DPFPDD_QUALITY_CANCELED: (1 << 1),
    DPFPDD_QUALITY_NO_FINGER: (1 << 1),
    DPFPDD_QUALITY_FAKE_FINGER: (1 << 3),
    DPFPDD_QUALITY_FINGER_TOO_LEFT: (1 << 4),
    DPFPDD_QUALITY_FINGER_TOO_RIGHT: (1 << 5),
    DPFPDD_QUALITY_FINGER_TOO_HIGH: (1 << 6),
    DPFPDD_QUALITY_FINGER_TOO_LOW: (1 << 7),
    DPFPDD_QUALITY_FINGER_OFF_CENTER: (1 << 8),
    DPFPDD_QUALITY_SCAN_SKEWED: (1 << 9),
    DPFPDD_QUALITY_SCAN_TOO_SHORT: (1 << 10),
    DPFPDD_QUALITY_SCAN_TOO_LONG: (1 << 11),
    DPFPDD_QUALITY_SCAN_TOO_SLOW: (1 << 12),
    DPFPDD_QUALITY_SCAN_TOO_FAST: (1 << 13),
    DPFPDD_QUALITY_SCAN_WRONG_DIRECTION: (1 << 14),
    DPFPDD_QUALITY_READER_DIRTY: (1 << 15)
};

export const DPFPDD_IMAGE_FMT: ConstantInterface = {
    type: ref.types.uint,
    DPFPDD_IMG_FMT_PIXEL_BUFFER: 0,
    DPFPDD_IMG_FMT_ANSI381: 0x001B0401,
    DPFPDD_IMG_FMT_ISOIEC19794: 0x01010007
};

export const DPFPDD_IMAGE_PROC: ConstantInterface = {
    type: ref.types.uint,
    DPFPDD_IMG_PROC_DEFAULT: 0,
    DPFPDD_IMG_PROC_PIV: 1,
    DPFPDD_IMG_PROC_ENHANCED: 2,
    DPFPDD_IMG_PROC_ENHANCED_2: 3,
    DPFPDD_IMG_PROC_UNPROCESSED: 0x52617749
};

export const DPFPDD_IMG_PROC_NONE = DPFPDD_IMAGE_PROC.DPFPDD_IMG_PROC_DEFAULT;

export const DPFPDD_LED_ID: ConstantInterface = {
    type: ref.types.uint,
    DPFPDD_LED_MAIN: 0x01,
    DPFPDD_LED_REJECT: 0x04,
    DPFPDD_LED_ACCEPT: 0x08,
    DPFPDD_LED_FINGER_DETECT: 0x10,
    DPFPDD_LED_AUX_1: 0x14,
    DPFPDD_LED_AUX_2: 0x18,
    DPFPDD_LED_PWM: 0x80,
    DPFPDD_LED_ALL: 0xffffffff
};

export const DPFPDD_LED_MODE_TYPE: ConstantInterface = {
    type: ref.types.uint,
    DPFPDD_LED_AUTO: 1,
    DPFPDD_LED_CLIENT: 2,
    DPFPDD_LED_CLIENT_PWM: 3,
    DPFPDD_LED_CLIENT_BLINK: 4
};

export const DPFPDD_LED_CMD_TYPE: ConstantInterface = {
    type: ref.types.uint,
    DPFPDD_LED_CMD_OFF: 0,
    DPFPDD_LED_CMD_ON: 1,
    DPFPDD_LED_CMD_PWM_MIN: 0,
    DPFPDD_LED_CMD_PWM_MAX: 255,
    DPFPDD_CLIENT_PWM_SUPPORTED: 0x80000000,
    DPFPDD_CLIENT_BLINK_SUPPORTED: 0x40000000
};

export const DPFPDD_PARMID: ConstantInterface = {
    type: ref.types.uint,
    DPFPDD_PARMID_ROTATE: 0x100,
    DPFPDD_PARMID_FINGERDETECT_ENABLE: 0x104,
    DPFPDD_PARMID_IOMAP: 0x105,
    DPFPDD_PARMID_MOTIONDETECT_ENABLE: 0x107,
    DPFPDD_PARMID_FRAME_INTERVAL: 0x110,
    DPFPDD_PARMID_PTAPI_GET_GUID: 0x302,
    DPFPDD_PARMID_PAD_ENABLE: 0x200,
    DPFPDD_PARMID_PAD_DP_ENABLE: 0x201,
    DPFPDD_PARMID_PAD_CONFIDENCE: 0x202
};

export const DPFPDD_PARMID_SPOOFDETECT_ENABLE = DPFPDD_PARMID.DPFPDD_PARMID_PAD_DP_ENABLE;

export const DPFJ_FID_FORMAT: ConstantInterface = {
    type: ref.types.int,
    DPFJ_FID_ANSI_381_2004: 0x001B0401,
    DPFJ_FID_ISO_19794_4_2005: 0x01010007
};

export const DPFJ_FMD_FORMAT: ConstantInterface = {
    type: ref.types.int,
    DPFJ_FMD_ANSI_378_2004: 0x001B0001,
    DPFJ_FMD_ISO_19794_2_2005: 0x01010001,
    DPFJ_FMD_DP_PRE_REG_FEATURES: 0,
    DPFJ_FMD_DP_REG_FEATURES: 1,
    DPFJ_FMD_DP_VER_FEATURES: 2,
    DPFJ_FMD_DP_PLATINUM_REG_FEATURES: 3
};

export const DPFJ_FINGER_POSITION: ConstantInterface = {
    type: ref.types.int,
    DPFJ_POSITION_UNKNOWN: 0,
    DPFJ_POSITION_RTHUMB: 1,
    DPFJ_POSITION_RINDEX: 2,
    DPFJ_POSITION_RMIDDLE: 3,
    DPFJ_POSITION_RRING: 4,
    DPFJ_POSITION_RLITTLE: 5,
    DPFJ_POSITION_LTHUMB: 6,
    DPFJ_POSITION_LINDEX: 7,
    DPFJ_POSITION_LMIDDLE: 8,
    DPFJ_POSITION_LRING: 9,
    DPFJ_POSITION_LLITTLE: 10
};

export const DPFJ_SCAN_TYPE: ConstantInterface = {
    type: ref.types.int,
    DPFJ_SCAN_LIVE_PLAIN: 0,
    DPFJ_SCAN_LIVE_ROLLED: 1,
    DPFJ_SCAN_NONLIVE_PLAIN: 2,
    DPFJ_SCAN_NONLIVE_ROLLED: 3,
    DPFJ_SCAN_SWIPE: 8
};

export const DPFJ_ENGINE_TYPE: ConstantInterface = {
    type: ref.types.int,
    DPFJ_ENGINE_DPFJ: 0,
    DPFJ_ENGINE_INNOVATRICS_ANSIISO: 1,
    DPFJ_ENGINE_DPFJ7: 2
};

const FMD_SIZE: ConstantInterface = {
    DPFJ_FID_ANSI_381_2004_RECORD_HEADER_LENGTH: 36,
    DPFJ_FID_ISO_19794_4_2005_RECORD_HEADER_LENGTH: 32,
    DPFJ_FID_ANSI_ISO_VIEW_HEADER_LENGTH: 14,
    DPFJ_FMD_ANSI_378_2004_RECORD_HEADER_LENGTH: 26,
    DPFJ_FMD_ISO_19794_2_2005_RECORD_HEADER_LENGTH: 24,
    DPFJ_FMD_ANSI_ISO_VIEW_HEADER_LENGTH: 4,
    DPFJ_FMD_ANSI_ISO_MINITIA_LENGTH: 6,
}

export const MAX_FMD_SIZE = (parseInt(FMD_SIZE.DPFJ_FMD_ANSI_378_2004_RECORD_HEADER_LENGTH.toString()) + parseInt(FMD_SIZE.DPFJ_FMD_ANSI_ISO_VIEW_HEADER_LENGTH.toString()) + 255 * parseInt(FMD_SIZE.DPFJ_FMD_ANSI_ISO_MINITIA_LENGTH.toString()) + 2);
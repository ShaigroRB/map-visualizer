const Assets = {
    BLOCK_1X1: 0,
    RAMP_A: 1,
    RAMP_B: 2,
    RAMP_C: 3,
    RAMP_D: 4,
    TERRAIN: 5,
    POLYGON_TOOL: 6,
    PLAYER_SPAWN: 7,
    USC_SPAWN: 8,
    THE_MAN_SPAWN: 9,
    USC_CTF_FLAG: 10,
    THE_MAN_CTF_FLAG: 11,
    TDM_FLAG: 12,
    WAYPOINT: 13,
    WAYPOINT_BLOCK: 14,
    PATROLPOINT: 15,
    LADDER_METAL: 16,
    WINDOW_VERTICAL: 17,
    EXP_BARREL: 18,
    FLOOR_SPIKES: 19,
    SPIKE_TRAP_TRIGGER: 20,
    MEDIKIT_SPAWN: 21,
    AMMOBOX_SPAWN: 22,
    USC_GENERATOR: 23,
    USC_TURRET: 24,
    USC_RESUPPLY: 25,
    THE_MAN_GENERATOR: 26,
    THE_MAN_TURRET: 27,
    THE_MAN_RESUPPLY: 28,
    SWINGING_AXE: 29,
    LADDER_WOOD: 30,
    WATER: 31,
    LAVA: 32,
    EMPTY_SEA: 33,
    MOVING_PLATFORM: 35,
    CLIMB_FLAG: 36,
    PLATFORM_TOOL: 37,
    TRIPLE_DAMAGE: 38,
    SUPER_SPEED: 39,
    INVISIBILITY: 40,
    REGENERATION: 41,
    BLOCK_4X1: 42,
    BLOCK_1X4: 43,
    CHEST_SPAWN: 44,
    SURVIVAL_OBJECTIVE: 45,
    WALL_TOOL: 46,
    BUTTON: 47,
    LEVER: 48,
    DOOR_MANUAL_VERTICAL: 49,
    KEY: 50,
    AND_LOGIC_GATE: 51,
    OR_LOGIC_GATE: 52,
    NOT_LOGIC_GATE: 53,
    ON_LOGIC_GATE: 54,
    LOGIC_LINE: 55,
    PRESSURE_PLATE: 56,
    DOOR_MANUAL_HORIZONTAL: 57,
    LASER_TRAP: 58,
    CONVEYOR_BELT_RIGHT: 59,
    CONVEYOR_BELT_LEFT: 60,
    TIMER_LOGIC_GATE: 61,
    WEAPON_CABINET: 62,
    BLOCK_2X2: 63,
    SURVIVAL_BAR_SPAWN: 64,
    SHARK: 65,
    TELEPORTER: 66,
    USC_TELEPORTER: 67,
    THE_MAN_TELEPORTER: 68,
    WEAPON_PRINTER: 69,
    WINDOW_HORIZONTAL: 70,
    TRIGGER_AREA: 71,
    DOOR_AUTO_VERTICAL: 72,
    DOOR_AUTO_HORIZONTAL: 73,
    SPIKE_TRAP_MANUAL: 74,
    RESET_LOGIC_GATE: 75,
    COUNT_LOGIC_GATE: 76,
    FOREVER_LOGIC_GATE: 77,
    NUMBER_DISPLAY: 78,
    WOOD_TARGET: 79,
    ZOMBRAINS_PRINTER: 80,
    GAMEMODE_LOGIC_GATE: 81,
    COMMAND_LOGIC_GATE: 82,
    ZOMB_HELICOPTER_SPAWN: 83,
    LADDER_TOOL_METAL: 84,
    LADDER_TOOL_WOOD: 85,
    STOPWATCH_LOGIC_GATE: 86,
    TAKEOVER_FLAG: 87,
    LONG_RAMP_A: 88,
    LONG_RAMP_B: 89,
    LONG_RAMP_C: 90,
    LONG_RAMP_D: 91,
};

class AssetObject extends MapObject {
    constructor(id, name, x, y, objIsTile, objIndexId, depth, logicId) {
        super(id, name, x, y, objIsTile, objIndexId, depth, logicId);
        this.fillColor = "#F08E3E";
    }
}
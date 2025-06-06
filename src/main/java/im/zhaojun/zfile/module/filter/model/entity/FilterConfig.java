package im.zhaojun.zfile.module.filter.model.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonIgnore;
import im.zhaojun.zfile.module.filter.model.enums.FilterConfigHiddenModeEnum;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.io.Serializable;

/**
 * 存储源过滤配置 entity
 *
 * @author zhaojun
 */
@Data
@Schema(name="存储源过滤配置")
@TableName(value = "filter_config")
public class FilterConfig implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    @Schema(name = "ID, 新增无需填写", example = "1")
    private Integer id;


    @TableField(value = "storage_id")
    @Schema(name = "存储源 ID", requiredMode = Schema.RequiredMode.REQUIRED, example = "1")
    private Integer storageId;


    @TableField(value = "expression")
    @Schema(name = "过滤表达式", requiredMode = Schema.RequiredMode.REQUIRED, example = "/*.png")
    private String expression;


    @TableField(value = "description")
    @Schema(name = "表达式描述", requiredMode = Schema.RequiredMode.REQUIRED, example = "用来辅助记忆表达式")
    private String description;


    @TableField(value = "mode")
    @Schema(name = "模式", requiredMode = Schema.RequiredMode.REQUIRED, example = "隐藏模式，仅隐藏: hidden, 隐藏后不可访问: inaccessible, 隐藏后不可下载: disable_download")
    private FilterConfigHiddenModeEnum mode;

}
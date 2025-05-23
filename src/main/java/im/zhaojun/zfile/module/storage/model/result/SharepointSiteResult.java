package im.zhaojun.zfile.module.storage.model.result;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * Sharepoint 站点信息
 *
 * @author zhaojun
 */
@Data
@Schema(description = "SharePoint 站点结果类")
public class SharepointSiteResult {

	@Schema(name="站点 id")
	private String id;

	@Schema(name="站点名称")
	private String displayName;

	@Schema(name="站点地址")
	private String webUrl;

}
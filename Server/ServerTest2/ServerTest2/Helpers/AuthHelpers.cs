using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using ServerTest2.Models;

namespace ServerTest2.Helpers;

public class AuthHelpers
{
    public string GenerateJWTToken(User user, string secret)
    {
        var claims = new List<Claim>()
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id),
            new Claim(ClaimTypes.Name, user.Username)
        };
        var jwtToken = new JwtSecurityToken(
            claims: claims,
            notBefore: DateTime.UtcNow,
            expires: DateTime.UtcNow.AddDays(30),
            signingCredentials: new SigningCredentials(
                new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(secret)),
                SecurityAlgorithms.HmacSha256Signature
            ));

        return new JwtSecurityTokenHandler().WriteToken(jwtToken);
    }
}